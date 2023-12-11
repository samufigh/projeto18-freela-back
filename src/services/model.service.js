import { checkModel, createModel, getModel, getModels, getMyModels, setModel } from '../repository/model.repository.js';

export async function postModelService(user, { name, picture, description, pictureUserPet }) {
  const existingModel = await checkModel(name);
  if (existingModel.rowCount > 0) return 409;
  const model = await createModel(name, description, picture, pictureUserPet, user);
  return model;
}

export async function showModelsServicce() {
  const models = await getModels();
  return models.rows;
}

export async function infoModelService(id) {
  const model = await getModel(id);
  if (!model.rows[0]) return 404;
  return model.rows[0];
}

export async function showMyModelsService(user) {
  const myModels = await getMyModels(user);
  return myModels.rows;
}

export async function setAvailableService(id, available) {
  const model = await setModel(id, available);
  return model;
}
