import cloudinary from 'cloudinary';
import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

const updateUser = async (req, res) => {
  if (req.method === 'PUT') {
    try {
      const session = await getSession({ req });
      if (!session) res.status(500).json({ error: 'Not signed in' });

      const { name, images } = req.body;

      let result: any | {} = {};

      if (images[0]) {
        result = await cloudinary.v2.uploader.upload(
          images[0]?.data_url,
          {},
          (error, result) => {
            console.log(error);
            return result;
          },
        );
        if (!result.url) {
          res.json({
            error: 'something went wrong when uploading your image ',
          });
        }
      }

      const updatedUser = await prisma.user.update({
        where: {
          email: session.user.email,
        },
        data: {
          name: name || undefined,
          image: result.url || undefined,
        },
      });
      delete updatedUser.id;
      delete updatedUser.emailVerified;
      res.json(updatedUser);
    } catch (err) {
      console.log(err);
      res.json({ error: err });
    }
  } else {
    res.status(500).json({ error: 'this endpoint only accepts PUT requests' });
  }
};

export default updateUser;
