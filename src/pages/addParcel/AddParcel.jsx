import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";

const AddParcel = () => {
  const serviceCenters = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { register, handleSubmit, control } = useForm();

  const divisions = serviceCenters.map((c) => c.region);
  const uniqueDivisions = [...new Set(divisions)];
  const senderDivision = useWatch({ control, name: "senderDivision" });
  const receiverDivision = useWatch({ control, name: "receiverDivision" });

  const distictsByDivision = (division) => {
    const districtsObj = serviceCenters.filter((c) => c.region === division);
    const districts = districtsObj.map((d) => d.district);
    return districts;
  };
  const handleSendparcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }
    data.cost = cost;
    Swal.fire({
      title: "Agree with the Cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .post("/parcels", data)
          .then((res) => {
            console.log(res);
            Swal.fire({
              title: "Send!",
              text: "Your file has been send.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="bg-white rounded-2xl p-10">
      <h2 className="text-4xl font-bold">Send A Parcel</h2>
      <h4 className="text-2xl font-semibold my-5">Enter your parcel details</h4>
      <div>
        <form onSubmit={handleSubmit(handleSendparcel)}>
          <div className="space-x-3.5 flex my-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                {...register("parcelType")}
                value="document"
                className="radio"
                defaultChecked
              />
              <span>Document</span>
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                {...register("parcelType")}
                value="non-document"
                className="radio"
              />
              <span>Non-Document</span>
            </label>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
            <label className="flex flex-col w-full md:flex-1">
              <span>Parcel Name</span>
              <input
                type="text"
                {...register("parcelName")}
                placeholder="Parcel Name"
                className="input w-full"
              />
            </label>
            <label className="flex flex-col w-full md:flex-1">
              <span>Parcel Weight (KG)</span>
              <input
                type="number"
                {...register("parcelWeight")}
                placeholder="Parcel Weight (KG)"
                className="input w-full"
              />
            </label>
          </div>
          <hr className=" mt-5 text-gray-300" />

          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
            <div className="w-full md:flex-1 space-y-3.5">
              <h3 className="text-xl font-medium my-5">Sender Details</h3>
              <label className="flex flex-col w-full">
                <span>Sender Name</span>
                <input
                  type="text"
                  {...register("senderName")}
                  placeholder="Sender Name"
                  className="input w-full"
                  defaultValue={user?.displayName}
                />
              </label>

              <label className="flex flex-col w-full">
                <span>Sender Email</span>
                <input
                  type="email"
                  {...register("senderEmail")}
                  placeholder="Sender Email"
                  className="input w-full"
                  defaultValue={user?.email}
                />
              </label>
              <label className="flex flex-col w-full">
                <span>Sender Phone No</span>
                <input
                  type="text"
                  {...register("senderPhoneNo")}
                  placeholder="Sender Phone No"
                  className="input w-full"
                />
              </label>
              {/* select sender division  */}
              <div>
                <label>Select a Division</label>
                <fieldset className="fieldset">
                  <select
                    {...register("senderDivision")}
                    defaultValue="Select a Division"
                    className="select w-full"
                  >
                    <option disabled={true}>Select a Division</option>
                    {uniqueDivisions.map((dv, i) => (
                      <option key={i} value={dv}>
                        {dv}
                      </option>
                    ))}
                  </select>
                </fieldset>
              </div>
              {/* select sender district  */}
              <div>
                <label>Select a District</label>
                <fieldset className="fieldset">
                  <select
                    {...register("senderDistrict")}
                    defaultValue="Select a District"
                    className="select w-full"
                  >
                    <option disabled={true}>Select a District</option>
                    {distictsByDivision(senderDivision).map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </fieldset>
              </div>
              {/* address  */}
              <label className="flex flex-col w-full">
                <span>Address</span>
                <input
                  type="text"
                  {...register("senderAddress")}
                  placeholder="Address"
                  className="input w-full"
                />
              </label>
              {/* pic up instruction */}
              <div>
                <label>Pickup Instruction</label>
                <fieldset className="fieldset">
                  <textarea
                    {...register("pickUpInstruction")}
                    className="textarea h-24 w-full"
                    placeholder="Pickup Instruction"
                  ></textarea>
                </fieldset>
              </div>
            </div>
            <div className="w-full md:flex-1 space-y-3.5">
              <h3 className="text-xl font-medium my-5">receiver Details</h3>
              <label className="flex flex-col w-full">
                <span>receiver Name</span>
                <input
                  type="text"
                  {...register("receiverName")}
                  placeholder="receiver Name"
                  className="input w-full"
                />
              </label>

              <label className="flex flex-col w-full">
                <span>receiver Email</span>
                <input
                  type="email"
                  {...register("receiverEmail")}
                  placeholder="receiver Email"
                  className="input w-full"
                />
              </label>
              <label className="flex flex-col w-full">
                <span>receiver Phone No</span>
                <input
                  type="text"
                  {...register("receiverPhoneNo")}
                  placeholder="Sender Phone No"
                  className="input w-full"
                />
              </label>
              {/* select receiver Division  */}
              <div>
                <label>Select a Division</label>
                <fieldset className="fieldset">
                  <select
                    {...register("receiverDivision")}
                    defaultValue="Select a Division"
                    className="select w-full"
                  >
                    <option disabled={true}>Select a Division</option>
                    {uniqueDivisions.map((dv, i) => (
                      <option key={i} value={dv}>
                        {dv}
                      </option>
                    ))}
                  </select>
                </fieldset>
              </div>
              {/* select receiver district  */}
              <div>
                <label>Select a District</label>
                <fieldset className="fieldset">
                  <select
                    {...register("receiverDistrict")}
                    defaultValue="Pick a browser"
                    className="select w-full"
                  >
                    <option disabled={true}>Select a District</option>
                    {distictsByDivision(receiverDivision).map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </fieldset>
              </div>

              <label className="flex flex-col w-full">
                <span>Address</span>
                <input
                  type="text"
                  {...register("receiverAddress")}
                  placeholder="Address"
                  className="input w-full"
                />
              </label>

              {/* delivary instruction */}
              <div>
                <label>Delivery Instruction</label>
                <fieldset className="fieldset">
                  <textarea
                    {...register("deliveryInstruction")}
                    className="textarea h-24 w-full"
                    placeholder="Delivery Instruction"
                  ></textarea>
                </fieldset>
              </div>
            </div>
          </div>
          <button className="btn btn-primary text-secondary mt-5">
            Proceed to Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddParcel;
