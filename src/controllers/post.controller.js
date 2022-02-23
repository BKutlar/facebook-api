import * as PostModel from '../models/post.model';

export const CreatePostDto = async ({ body, user }, response) => {
  const { message } = body;
  const post = await PostModel.createOne({
    message,
    authorId: user.id,
  });

  response
    .status(201)
    .json({ data: { post } });
}

export const findById = async (request, response) => {
  const id = Number(request.params.id);
  const post = await PostModel.findById(id);

  response.json({ post });
}


export const findAll = async (_request, response) => {
  response.json({
    posts: await PostModel.findAll(),
  });
}

export const UpdatePostDto = async (request, response) => {

  const { id } = request.params;
  const { message } = request.body;

  const post = await PostModel.updateOne({

    id: Number(id),
    message,

  });

  response.json({ post })
}


export const deleteOne = async (request, response) => {
  const id = Number(request.params.id);

  await PostModel.deleteOne(id);

  response.status(204).end();
}