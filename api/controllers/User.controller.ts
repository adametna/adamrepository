import User from "../db/models/User";
import { Request, Response } from "express";

export async function getUser(req: Request, res: Response) {
  const allUser = await User.find({});
  if (allUser) {
    return res.send(allUser);
  }
  return res.status(404).send("user not found");
}

export async function getUserById(req: Request, res: Response) {
    const id = req.params.id;
    const userById = await User.findOne({ _id: id });
    if (userById) {
      return res.send(userById);
    }
    return res.status(404).send("user id not found");
  }

export async function createUser(req: Request, res: Response) {
  const chouflUser: any = req.body;
  if (
    chouflUser.name &&
    chouflUser.email &&
    chouflUser.password &&
    chouflUser.adress &&
    chouflUser.dateOfBirth
  ) {
    const newUser = await User.create({
      name: chouflUser.name,
      email: chouflUser.email,
      password: chouflUser.password,
      adress: chouflUser.adress,
      dateOfBirth: chouflUser.dateOfBirth,
      createdAt: chouflUser.createdAt,
      updatedAt: chouflUser.updatedAt,
    });
    return res.send(newUser);
  }
  return res.status(404).send("user cant be created");
}

export async function modifyUser(req: Request, res: Response) {
    const id = req.params.id;
    const user: any = await User.findOne({ _id: id });
  
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let dateOfBirth = req.body.dateOfBirth;
    let adress = req.body.adress;
  
    if (!name) {
      name = user.name;
    }
  
    if (!email) {
      email = user.email;
    }
  
    if (!password) {
      password = user.password;
    }
  
    if (!dateOfBirth) {
      dateOfBirth = user.dateOfBirth;
    }

    if (!adress) {
        adress = user.adress;
    }
    
  
    const result = await User.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name: name,
          email: email,
          password: password,
          adress: adress,
          dateOfBirth: dateOfBirth,
        },
      }
    );
  
    if (result) {
      return res.send(result);
    }
  
    return res.status(404).send("cant upadate user data");
  }