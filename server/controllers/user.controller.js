import { db } from './libs/dbConnect.js';
import { ObjectId } from 'mongodb';

const collection = db.collection('users');

export const test = async (req, res) => {
  let results = await collection.find({}).toArray();
  res.status(200).json(results);
};

export const getUser = async (req, res, next) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const user = await collection.findOne(query);

    if(!user){
      return next({ status: 404, message: 'User not found' });
    }

    res.status(200).json(user);
  } catch(error) {
    next({ status: 500, error });
  }
};
