import React from "react";
import Layout from "../../components/Layout/Layout";
import FormInput from "../../components/FormInput/FormInput";
import Uploader from "../../components/Uploader/Uploader";
import "./Certificate.scss"

function Certificate() {
  return (
    <Layout>
      <main className="w-full">
        <section className="text-white text-3xl md:text-5xl font-bold cert-header pt-[100px] md:pt-[150px] md:pb-10 pl-16 md:pl-32">
          <h1 className="py-10">Certificate Application</h1>
        </section>
        <section className="px-16 py-10 md:px-32 md:py-20">
          <p className="text-[#E3002F] pb-8 text-sm font-semibold">Make sure to input your correct information (apply once and wait for a response via email) </p>
          <form action="mailto:christofaokoro@gmail.com" method="post" enctype="text/plain" className="flex flex-col gap-5">
            <FormInput
              inputName="Matriculation"
              inputType="text"
              placeholder="Enter your matriculation number"
              name="Matriculation Number" />
            <FormInput
              inputName="Full name"
              inputType="text"
              placeholder="Enter your fullname"
              name="Name" />
            <FormInput
              inputName="Email"
              inputType="email"
              placeholder="Enter your email address"
              name="studentEmail" />
              <div className="flex flex-col gap-2">
              <label className="text-lg font-medium">Upload O`level</label>
              <Uploader />
              </div>
              <textarea
              className="border my-2 w-full p-2 rounded resize-none focus:outline-[#7AD8FF] focus:outline-1" 
              rows= "5"
              placeholder="Enter a message"/>
              <div>
              <p className="text-[#002660] text-sm font-medium my-2">Fields with <span className="text-[#E3002F] font-bold">*</span> are compulsory, they must not be skipped </p>
              <button 
              className="bg-[#0042A5] text-[10px] text-white p-3 font-semibold hover:opacity-70"
              type="submit">SUBMIT APPLICATION</button>
              </div>
             
          </form>
        </section>
      </main>
    </Layout>
  );
}

export default Certificate;