import { Router } from "express";
import type * as Express from "express";
import { UserDetails } from "../data/models";
import { UserDetails as T_UserDetails } from "../types";

export const router = Router();

const addDetails = async (req: Express.Request, res: Express.Response) => {
  const data: T_UserDetails = req.body;
  const id = req.params.userid;

  try {
    const [result2] = await UserDetails.insert({
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
        utilities: data.utilities
      },
    });
    return res.status(201).json({ id: 1 });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Error adding data.",
    });
  }
};

router.post("/:userid", addDetails);
