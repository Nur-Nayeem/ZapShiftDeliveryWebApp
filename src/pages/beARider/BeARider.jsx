import React from "react";
import { useForm, useWatch } from "react-hook-form";
import rider from "../../assets/rider/agent-pending.png";
import { useLoaderData, useNavigate } from "react-router";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";

const BeARider = () => {
  const serviceCenters = useLoaderData();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { register, handleSubmit, control } = useForm();

  const divisions = serviceCenters.map((c) => c.region);
  const uniqueDivisions = [...new Set(divisions)];
  const riderDivision = useWatch({ control, name: "riderDivision" });

  const distictsByDivision = (division) => {
    const districtsObj = serviceCenters.filter((c) => c.region === division);
    const districts = districtsObj.map((d) => d.district);
    return districts;
  };

  const handleRiderInfoSubmit = (data) => {
    axiosSecure
      .post("/riders", data)
      .then((res) => {
        if (res.data.insertedId) {
          navigate("/");
          Swal.fire({
            icon: "success",
            title: "Successfully submitted your request",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="p-5 sm:p-8 md:p-24 bg-white rounded-2xl shadow-sm">
      <h2 className="text-4xl font-bold">Be a Rider</h2>
      <p className="text-gray-500 max-w-lg my-5">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <form
          onSubmit={handleSubmit(handleRiderInfoSubmit)}
          className="md:max-w-xl w-full space-y-3.5"
        >
          <h3 className="text-2xl font-medium">Tell us about yourself</h3>
          <div>
            <label className="flex flex-col w-full md:flex-1">
              <span>Your Name</span>
              <input
                type="text"
                {...register("riderName")}
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className="input w-full"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col w-full md:flex-1">
              <span>Driving License Number</span>
              <input
                type="number"
                {...register("licenseNumber")}
                placeholder="Driving License Number"
                className="input w-full"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col w-full md:flex-1">
              <span>Your Emial</span>
              <input
                type="text"
                {...register("riderEmail")}
                defaultValue={user?.email}
                placeholder="Your Emial"
                className="input w-full"
              />
            </label>
          </div>

          <div>
            <label>Select a Division</label>
            <fieldset className="fieldset">
              <select
                {...register("riderDivision")}
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
                {...register("riderDistrict")}
                defaultValue="Select a District"
                className="select w-full"
              >
                <option disabled={true}>Select a District</option>
                {distictsByDivision(riderDivision).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>
          </div>

          <div>
            <label className="flex flex-col w-full md:flex-1">
              <span>NID No</span>
              <input
                type="number"
                {...register("nidNo")}
                placeholder="NID"
                className="input w-full"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col w-full md:flex-1">
              <span>Phone Number</span>
              <input
                type="text"
                {...register("phoneNumber")}
                placeholder="Phone Number"
                className="input w-full"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col w-full md:flex-1">
              <span>Bike Brand Model and Year</span>
              <input
                type="text"
                {...register("brandModelYear")}
                placeholder="Bike Brand Model and Year"
                className="input w-full"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col w-full md:flex-1">
              <span>Bike Registration Number</span>
              <input
                type="text"
                {...register("registrationNumber")}
                placeholder="Bike Registration Number"
                className="input w-full"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col w-full md:flex-1">
              <span>Tell Us About Yourself</span>
              <input
                type="text"
                {...register("tellUsYourSelf")}
                placeholder="Tell Us About Yourself"
                className="input w-full"
              />
            </label>
          </div>
          <button className="btn w-full bg-primary">Submit</button>
        </form>
        <figure>
          <img src={rider} alt="Be a Rider" />
        </figure>
      </div>
    </div>
  );
};

export default BeARider;
