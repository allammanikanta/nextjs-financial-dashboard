import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileImage: null,
  profileData: {
    name: "Charlene Reed",
    username: "charlenereed",
    email: "charlenereed@gmail.com",
    password: "Rush@876gh",
    dob: "25 January 1990",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
    updateProfileData: (state, action) => {
      state.profileData = { ...state.profileData, ...action.payload };
    },
  },
});

export const { setProfileImage, updateProfileData } = userSlice.actions;
export default userSlice.reducer;
