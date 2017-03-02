'use strict';

const MONGO_CONFIG = require('../config/mongo_config.js');
const MahasiswaRepository = require('../repositories/mahasiswa_repository');

function saveMahasiswa(req, res, next){
  if(!req.body){
    res.send('data tidak boleh kosong..');
  }
  let mahasiswa = req.body;
  let mahasiswaRepository = new MahasiswaRepository(MONGO_CONFIG);
  mahasiswaRepository.save(mahasiswa, (err, response) => {
    if(err){
      res.send(err);
    }
    res.status(200).json({message: response});
  });
}

function updateMahasiswa(req, res, next){
  if(!req.params){
    res.send('parameter belum di inputkan');
  }
  if(!req.body){
    res.send('data tidak boleh kosong');
  }
  let nim = req.params.nim;
  let mahasiswa = req.body;
  let mahasiswaRepository = new MahasiswaRepository(MONGO_CONFIG);
  mahasiswaRepository.update(nim, mahasiswa, (err, response) => {
    if(err){
      res.send(err);
    }
    res.status(200).json({message: response});
  });
}

function deleteMahasiswa(req, res, next){
  if(!req.params){
    res.send('parameter belum di inputkan');
  }
  let nim = req.params.nim;
  let mahasiswaRepository = new MahasiswaRepository(MONGO_CONFIG);
  mahasiswaRepository.delete(nim, (err, response) => {
    if(err){
      res.send(err);
    }
    res.status(200).json({message: response});
  });
}

function getMahasiswa(req, res, next){
  if(!req.params){
    res.send('parameter belum di inputkan');
  }
  let nim = req.params.nim;
  let mahasiswaRepository = new MahasiswaRepository(MONGO_CONFIG);
  mahasiswaRepository.findByNim(nim, (err, data) => {
    if(err){
      res.send(err);
    }
    res.status(200).json(data);
  });
}

function getMahasiswaAll(req, res, next){
  let mahasiswaRepository = new MahasiswaRepository(MONGO_CONFIG);
  mahasiswaRepository.findAll((err, data) => {
    if(err){
      res.send(err);
    }
    res.status(200).json(data);
  });
}

module.exports = {
  saveMahasiswa: saveMahasiswa,
  updateMahasiswa: updateMahasiswa,
  deleteMahasiswa: deleteMahasiswa,
  getMahasiswa: getMahasiswa,
  getMahasiswaAll: getMahasiswaAll
};
