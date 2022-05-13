import { Action } from "@reduxjs/toolkit";

export interface LayoutProps {
  children: React.ReactNode;
  classNames? : string
}

export interface ActionWithPayload<T> extends Action {
  payload?: T
}