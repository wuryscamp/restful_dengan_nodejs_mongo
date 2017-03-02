'use strict';

class MahasiswaRepository {

  constructor(mongo){
    this.mongo = mongo;
  }

  save(mahasiswa, cb){
    let self = this;
    self.mongo((err, db) => {
      if(err){
        cb(err, null);
      }
      db.collection('mahasiswa').insertOne(mahasiswa, (err, response) => {
        if(err){
          cb(err, null);
        }
        cb(null, 'Penambahan data berhasil');
      });
    });
  }

  update(nim, mahasiswa, cb){
    let self = this;
    self.mongo((err, db) => {
      if(err){
        cb(err, null);
      }
      db.collection('mahasiswa').updateOne({nim: nim}, {$set: {nama: mahasiswa.nama, jurusan: mahasiswa.jurusan}}, (err, response)  => {
        if(err){
          cb(err, null);
        }
        cb(null, 'Update data berhasil');
      });
    });
  }

  delete(nim, cb){
    let self = this;
    self.mongo((err, db) => {
      if(err){
        cb(err, null);
      }
      db.collection('mahasiswa').deleteOne({nim: nim}, (err, response) => {
        if(err){
          cb(err, null);
        }
        cb(null, 'Delete data berhasil..');
      });
    });
  }

  findByNim(nim, cb){
    let self = this;
    self.mongo((err, db) => {
      if(err){
        cb(err, null);
      }
      db.collection('mahasiswa').find({nim: nim}).toArray((err, docs) => {
        if(err){
          cb(err, null);
        }
        cb(null, docs[0]);
      });
    });
  }

  findAll(cb){
    let self = this;
    self.mongo((err, db) => {
      if(err){
        cb(err, null);
      }
      db.collection('mahasiswa').find({}).toArray((err, docs) => {
        if(err){
          cb(err, null);
        }
        cb(null, docs);
      });
    });
  }
}

module.exports = MahasiswaRepository;
