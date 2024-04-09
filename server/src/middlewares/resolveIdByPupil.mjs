import { pupils } from "../utils/constants.mjs";

export const resolveIndexByPupilId = (req, res, nexr) => {
    const { params: {id}, } = req;
    const findPupilIndex = pupils.findIndex(pupil => pupil.id === id);
    if(findPupilIndex === -1) return res.sendStatus(400);

    req.findPupilIndex = findPupilIndex;

    next();

};