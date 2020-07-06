import { Router } from "express";
import type * as Express from "express";
import * as Jwt from "jsonwebtoken";
import { UserDetails } from "../data/models";
import { UserDetails as T_UserDetails } from "../types";

export const router = Router();

const addDetails = async (req: Express.Request, res: Express.Response) => {
  const data: T_UserDetails = req.body;
  const id = req.params.userid;

  try {
    const [result] = await UserDetails.insert({
      item: {
        user_id: id,
        education: data.education,
        major: data.major,
        avgmajor: data.avgmajor,
        lowmajor: data.lowmajor,
        highmajor: data.highmajor,
        city: data.city,
        colindex: data.colindex,
        rent: data.rent,
        avgwage: data.avgwage,
        rentindex: data.rentindex,
        colplusrentindex: data.colplusrentindex,
        groceriesindex: data.groceriesindex,
        restaurantpriceindex: data.restaurantpriceindex,
        utilities: data.utilities,
        groceries: data.groceries,
        restaurant: data.restaurant,
        premiums: data.premiums,
        medExpenses: data.medExpenses,
        carPayment: data.carPayment,
        insurance: data.insurance,
        gas: data.gas,
        carMaintenance: data.carMaintenance,
        internet: data.internet,
        cell: data.cell,
        tv: data.tv,
        studentLoans: data.studentLoans,
        clothing: data.clothing,
        entertainment: data.entertainment,
        pOther: data.pOther,
      },
    });
    return res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Error adding data.",
    });
  }
};

const getDetails = async (req: Express.Request, res: Express.Response) => {
  var authorization = req.headers.authorization,
    decoded;
  try {
    decoded = Jwt.verify(authorization, process.env.JWT_SECRET);
  } catch (e) {
    return res.status(401).send("unauthorized");
  }
  var user_id = decoded.userid;

  try {
    const details = await UserDetails.getDetails({ user_id });
    return res.status(200).json({
      details: details,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Error getting user.",
    });
  }
};

const updateDetails = async (req: Express.Request, res: Express.Response) => {
  let id = req.params.detailsid;

  try {
    let oldDetails = await UserDetails.get({ id });
    let updates = req.body;
    let updatedDetails = { ...oldDetails[0], ...updates };
    // updatedDetails works. Need to actually update with the update method. Easy. 
    let details = await UserDetails.update({ keyValue: id, changes: updatedDetails })
    return res.status(200).json({
      details: details,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Error updating details.",
    });
  }
};

router.post("/user/:userid", addDetails);
router.get("/", getDetails);
router.put("/:detailsid", updateDetails);
