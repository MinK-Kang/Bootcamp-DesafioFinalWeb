import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import { MdAddCircleOutline } from "react-icons/md";
import * as Yup from "yup";

import ImageInput from "~/pages/NewMeetUp/ImageInput/index";
import { Container } from "~/pages/NewMeetUp/styles";

const schema = Yup.object().shape({
  title: Yup.string().required("O título é obrigatório"),
  description: Yup.string().required("A descrição é obrigatória"),
  data: Yup.string().required("A data é obrigatória"),
  local: Yup.string().required("A localização é obrigatória")
});

export default function NewMeetUp() {
  const dispatch = useDispatch();

  function handleSubmit({ title, description, data, local }) {}

  return (
    <Container>
      <ImageInput />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="title" placeholder="Título do Meetup" />
        <Input
          name="description"
          placeholder="Descrição completa"
          description
        />
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
