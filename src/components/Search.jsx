import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex-col justify-evenly">
        <div>
          <h2 className="uppercase">
            Luxury Included Vacations for Two People
          </h2>
          <p className="py-4">
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2 uppercase">Leading Services</h3>
              <p className="py-1">
                All-inclusive company for 20 years in-a-row
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2 uppercase">Automated Bookings</h3>
              <p className="py-1">
                All-inclusive company for 20 years in-a-row
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center">
          <p className="pt-2 uppercase">Get an additional 10% off</p>
          <p className="py-4 uppercase">12 hours left</p>
          <p className="bg-gray-800 text-gray-200 py-2 uppercase">Book Now and Save</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Grand Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-in</label>
            <input className="border rounded-md p-2 focus:outline-none" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-out</label>
            <input className="border rounded-md p-2 focus:outline-none" type="date" />
          </div>
            <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
