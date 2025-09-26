import { createSlice } from '@reduxjs/toolkit';
import i18n from '../i18n';

const savedLang = localStorage.getItem("language") || "uz";

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    lang: savedLang,
  },
  reducers: {
    setLanguage(state, action) {
      state.lang = action.payload;
      i18n.changeLanguage(action.payload);
      localStorage.setItem("language", action.payload); // shu yerda saqlanadi
    }
  }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
