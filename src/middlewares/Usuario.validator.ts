import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
	const schema = Joi.object({
		doc_identidad: Joi.string().required(),
		nombre: Joi.string().required(),
		apellido: Joi.string().required(),
		email: Joi.string().email().required(),
		clave: Joi.string().required(),
		id_rol: Joi.number().optional()
	});

	const { error } = schema.validate(req.body);
	if (error) {
		res.status(400).json({ error: error.details[0].message });
	} else {
		next();
	}
};

export const validateSignIn = (req: Request, res: Response, next: NextFunction) => {
	const schema = Joi.object({
		email: Joi.string().email().required(),
		clave: Joi.string().required(),
	});

	const { error } = schema.validate(req.body);
	if (error) {
		res.status(400).json({ error: error.details[0].message });
	} else {
		next();
	}
}