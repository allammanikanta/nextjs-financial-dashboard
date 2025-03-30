"use client";
import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setProfileImage, updateProfileData } from "../redux/userSlice";
import { useForm } from "react-hook-form";

// Field component to render form fields
const Field = ({
  label,
  name,
  register,
  rules = {},
  errors,
  type = "text",
}) => (
  <div className="flex flex-col">
    <label className="text-[16px] text-[#232323] mb-2 font-400">{label}</label>
    <input
      type={type}
      {...register(name, rules)}
      className={`border rounded-[15px] px-4 py-2 focus:outline-none focus:ring text-[#718EBF] text-[15px] ${
        errors?.[name]
          ? "border-red-500 focus:ring-red-300"
          : "border-gray-200 focus:ring-gray-300"
      }`}
    />
    {errors?.[name] && (
      <span className="text-sm text-red-500 mt-1">{errors[name].message}</span>
    )}
  </div>
);

const EditProfile = ({ register, handleSubmit, setValue, errors }) => {
  const dispatch = useDispatch();
  const profileImage = useSelector((state) => state.user.profileImage);
  const profileData = useSelector((state) => state.user.profileData);

  const fileInputRef = useRef(null);

  // Initialize the form with the Redux store data
  const {
    register: formRegister,
    handleSubmit: formHandleSubmit,
    setValue: formSetValue,
    formState: { errors: formErrors },
  } = useForm({
    defaultValues: profileData, // Set initial values from Redux store
    mode: "onChange",
  });

  // Handle image click
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setProfileImage(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const onSubmit = (data) => {
    dispatch(updateProfileData(data));
    toast.success("Profile updated successfully!");
  };

  // Synchronize Redux data with form
  useEffect(() => {
    if (profileData) {
      // Loop through each field in the profile data and set the value in the form
      Object.keys(profileData).forEach((key) => {
        formSetValue(key, profileData[key]);
      });
    }
  }, [profileData, formSetValue]);

  return (
    <form
      onSubmit={formHandleSubmit(onSubmit)}
      className="flex-1 p-6 overflow-auto"
    >
      <div className="flex flex-col md:flex-row gap-10">
        {/* Profile picture section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative w-20 h-20">
            <img
              src={profileImage || "/images/UserIcon.jpg"}
              alt="profile"
              className="rounded-full w-full h-full object-cover"
            />
            <img
              src="images/ProfileEditIcon.svg"
              className="w-9 h-9 absolute bottom-[-7px] right-[-7px] p-1 rounded-full cursor-pointer"
              onClick={handleImageClick}
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>

        {/* Form fields section */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field
            label="Your Name"
            name="name"
            register={formRegister}
            errors={formErrors}
            rules={{
              required: "Name is required",
            }}
          />
          <Field
            label="User Name"
            name="username"
            register={formRegister}
            errors={formErrors}
            rules={{
              required: "Name is required",
            }}
          />
          <Field
            label="Email"
            name="email"
            type="email"
            register={formRegister}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/i, // Fix: Ensure the regex captures valid emails
                message: "Invalid email address",
              },
            }}
            errors={formErrors}
          />
          <Field
            label="Password"
            name="password"
            type="password"
            register={formRegister}
            rules={{
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters, including uppercase, lowercase, number, and special character.",
              },
            }}
            errors={formErrors}
          />
          <Field
            label="Date of Birth"
            name="dob"
            register={formRegister}
            errors={formErrors}
          />
          <Field
            label="Present Address"
            name="presentAddress"
            register={formRegister}
            errors={formErrors}
          />
          <Field
            label="Permanent Address"
            name="permanentAddress"
            register={formRegister}
            errors={formErrors}
          />
          <Field
            label="City"
            name="city"
            register={formRegister}
            errors={formErrors}
          />
          <Field
            label="Postal Code"
            name="postalCode"
            register={formRegister}
            rules={{
              required: "Postal is required",
              minLength: {
                value: 5,
                message: "Postal code must be 5 digits",
              },
            }}
            errors={formErrors}
          />
          <Field
            label="Country"
            name="country"
            register={formRegister}
            errors={formErrors}
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-[#232323] text-white px-6 py-2 hover:bg-gray-800 transition h-[50px] rounded-[15px] w-[190px]"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
