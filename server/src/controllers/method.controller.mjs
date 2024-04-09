import { validationResult, matchedData } from 'express-validator';
import { Mentor } from "../models/mentor.model.mjs";
import { hashedPassword } from "../utils/helpers.mjs";

export const getMentors = async (req, res) => {
    try {
        const mentors = await Mentor.find();
        if (!mentors) return res.sendStatus(404);
        return res.status(200).send(mentors);
    }   catch (error) {
        console.log(error);
        return res.sendStatus(404);
    }
};

export const createMentor = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) return res.status(400).send(result.array());
    const data = matchedData(req);

    data.password = hashedPassword(data.password);
    const newMentor = new Mentor(data);
    try {
        const savedMentor = await newMentor.save();
        return res.status(201).send(savedMentor);
    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
};

export const updateMentor = async (req, res) => {
    const { params: { id } } = req;
    const result = validationResult(req);
    if (!result.isEmpty()) return res.status(400).send(result.array());
    const data = matchedData(req);
    try {
        const updateMentor = await Mentor.findByIdAndUpdate(id, data, {new: true });
        if (!updateMentor) throw new Error('User Not Found');
        return res.status(200).send(updateMentor);
    } catch (error) {
        return res.status(500);
    }
};

export const patchMentor = async (req, res) => {
    const { params: { id } } = req;
    const result = validationResult(req);
    if (!result.isEmpty()) return res.status(400).send(result.array());
    const data = matchedData(req);
    try {
        const updateMentor = await Mentor.findByIdAndUpdate(id, data, { new: true});
        if(!updateMentor) return res.status(404).send('Mentor not found');
        return res.status(200).send(updateMentor);
    } catch (error) {
        return res.status(500);
    }
};

export const deleteMentor = async (req, res) => {
    const { params: { id } } = req;
    try {
        const deleteMentor = await Mentor.findByIdAndUpdate(id);
        if (!deleteMentor) return res.status(404);
        return res.status(204).send('Mentor deleted');
    } catch (error) {
        return res.status(500);
    }
};