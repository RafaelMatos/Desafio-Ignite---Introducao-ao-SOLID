import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { name, email } = request.body;

    const user = this.createUserUseCase.execute({ name, email });
    if (!user) {
      return response.status(400).send({ error: "Erro ao criar usuario" });
    }
    return response.status(201).send();
  }
}

export { CreateUserController };
