import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  format,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO
} from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import pt from "date-fns/locale/pt";
import { MdAddCircleOutline, MdChevronRight } from "react-icons/md";
import api from "~/services/api";

import { Container, Time } from "./styles";

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get("schedules", {
        params: { date }
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${dateFormatted}, às ${hour}h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(a =>
            isEqual(parseISO(a.date), compareDate)
          )
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date, dateFormatted]);

  function handleNewMeetup() {}

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/newMeetUp">
          <button type="button" onClick={handleNewMeetup}>
            <MdAddCircleOutline size={20} color="#fff" />
            Novo meetup
          </button>
        </Link>
      </header>

      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={false} available={!time.appointment}>
            <span>Meetup de React Native</span>
            <strong>{time.time}</strong>
            <button type="button">
              <MdChevronRight size={20} color="#fff" />
            </button>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
