import { Router } from "express";
import type * as Express from "express";
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

router.post("/:userid", addDetails);
