import {
  infoModelService,
  postModelService,
  setAvailableService,
  showModelsServicce,
  showMyModelsService,
} from '../services/model.service.js';

export async function postModel(req, res) {
  const { user } = res.locals;
  try {
    const response = await postModelService(user, req.body);

    if (response === 409) res.status(409).send({ message: 'Você já cadastrou um pet com esse nome!' });
    else res.status(200).send('Seu pet foi adicionado!');
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function showModels(req, res) {
  try {
    const models = await showModelsServicce();
    res.send(models);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function infoModel(req, res) {
  const { id } = req.params;
  try {
    const response = await infoModelService(id);
    if (response === 404) res.status(404).send({ message: 'pet não existe' });
    else res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function showMyModels(req, res) {
  const { user } = res.locals;
  try {
    const response = await showMyModelsService(user);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function setAvailable(req, res) {
  const { id } = req.params;
  const { available } = req.body;
  try {
    await setAvailableService(id, available);
    res.send('Atualizado');
  } catch (err) {
    res.status(500).send(err.message);
  }
}
