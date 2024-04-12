import RegisterForm from "@/components/RegisterForm";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
const Register = () => {
  return <RegisterForm />;
};

export default Register;
