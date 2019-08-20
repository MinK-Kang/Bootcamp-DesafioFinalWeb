import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import { MdAddCircleOutline } from "react-icons/md";
import * as Yup from "yup";

import ImageInput from "~/pages/NewMeetUp/ImageInput/index";
import { Container } from "~/pages/NewMeetUp/styles";
import { createMeetUpRequest } from "~/store/modules/meetup/actions";

const schema = Yup.object().shape({
  title: Yup.string().required("O título é obrigatório"),
  description: Yup.string().required("A descrição é obrigatória"),
  data: Yup.string().required("A data é obrigatória"),
  local: Yup.string().required("A localização é obrigatória")
});

export default function NewMeetUp() {
  const dispatch = useDispatch();

  function handleSubmit({ data }) {
    dispatch(createMeetUpRequest(data));
  }

  return (
    <Container>
      <ImageInput />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" />
        <Input name="data" placeholder="Data do Meetup" />
        <Input name="local" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar Meetup
        </button>
      </Form>
    </Container>
  );
}
