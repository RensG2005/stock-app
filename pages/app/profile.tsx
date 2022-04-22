import { getSession } from 'next-auth/react';
import ImageUploading from 'react-images-uploading';
import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import clsx from '../../lib/clsx';
import Title from '../../components/ui/Title';
import Button from '../../components/ui/Button/Button';
import DashboardLayout from '../../components/layouts/DashboardLayout';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session === null) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

function Profile({ session }) {
  const [name, setName] = useState<string>('');
  const [images, setImages] = useState([]);
  const [updateProfileOpen, setUpdateProfileOpen] = useState<boolean>(false);
  const toastId = useRef(null);

  const [user, setUser] = useState(session?.user);

  const {
    mutate, isIdle, isLoading, data, error, isError,
  } = useMutation(
    'updateUser',
    () => axios.put('/api/auth/updateUser', {
      name,
      images,
    }),
  );

  useEffect(() => {
    if (!isLoading && !isError && data && !isIdle) {
      setUser(data.data);
      toastId.current = toast('Profile updated successfully', {
        type: 'success',
      });
      setImages([]);
      setName('');
      setUpdateProfileOpen(false);
    }
  }, [data, isLoading, isError, isIdle]);

  return (
    <DashboardLayout title="Profile" user={user}>
      {!updateProfileOpen && (
        <>
          <Title type="h1" extraclass="my-8 text-4xl">
            Hello
            {' '}
            {user.name}
          </Title>
          <img src={user.image} className="rounded-full w-96 h-96 my-6" />
        </>
      )}
      <Button
        variant="secondary"
        onClick={() => setUpdateProfileOpen(!updateProfileOpen)}
      >
        {!updateProfileOpen ? 'Update Profile' : 'Back'}
      </Button>
      {updateProfileOpen && (
        <div className="relative flex flex-col mt-8">
          {isError && <p className="text-red-500">{error.message}</p>}
          {isError && (
            <p className="text-red-500">
              Please make sure your image file size is under 1MB
            </p>
          )}
          <Title type="h2">Name: </Title>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="my-5 bg-gray-200 border border-black border-1 rounded-md focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            type="text"
            placeholder={user.name}
          />
          <Title type="h2">Profile picture: </Title>
          <ImageUploading
            value={images}
            onChange={(imageList) => setImages(imageList)}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemove,
              dragProps,
              errors,
            }) => (
              <div className="flex flex-col">
                <Button
                  variant="transparent"
                  extraclass="hover:border-solid hover:bg-transparent h-96 m-8 border-sky-200 border-4 border-dotted"
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <Title type="h3" extraclass="text-black">
                    Click to upload file or Drop your file here
                  </Title>
                </Button>
                {imageList.map((image, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center"
                  >
                    <img
                      src={image.data_url}
                      alt="The image you just uploaded"
                      width="100"
                      height="100"
                      className="rounded-full"
                    />
                    <Button
                      variant="secondary"
                      extraclass="w-1/4 my-3 bg-red-500"
                      onClick={() => onImageRemove(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                {errors && (
                  <div>
                    {errors.maxNumber && (
                      <span>Number of selected images exceed maxNumber</span>
                    )}
                    {errors.acceptType && (
                      <span>Your selected file type is not allow</span>
                    )}
                    {errors.maxFileSize && (
                      <span>Selected file size exceed maxFileSize</span>
                    )}
                    {errors.resolution && (
                      <span>
                        Selected file is not match your desired resolution
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}
          </ImageUploading>
          <Button variant="primary" onClick={mutate} disabled={isLoading}>
            Update profile information
          </Button>
        </div>
      )}
    </DashboardLayout>
  );
}

export default Profile;
