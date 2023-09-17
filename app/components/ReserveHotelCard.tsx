export default function ReserveHotelCard() {
  return (
    <div className="w-full border-2 border-[#F6762D] rounded-3xl p-10 flex flex-col justify-between">
      <div className="flex w-full justify-between">
        <img
          src="/assets/imgs/dummy/imgo.svg"
          alt="Hotel Image"
          width="150px"
        />
        <div className="flex flex-col flex-grow ml-6 font-Coolvetica">
          <p className="text-[#AC8080] text-lg">
            Room in Natural Lodge
          </p>
          <p className="text-3xl">
            <span className="text-[#4BAF32]">Rajbhavan, </span>
            <span className="text-[#F6762D]">Chennai</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <p className="text-4xl font-Coolvetica text-[#4BAF32] mt-6">
          Price Details
        </p>
        <div className="font-Coolvetica text-lg text-[#F6762D] flex-grow justify-between flex flex-col mt-4">
          <div className="flex justify-between items-center">
            <p>₹7,936 per night x 15</p>
            <p>₹2,63,072</p>
          </div>
          <div className="flex justify-between items-center">
            <p>BharatBNB Service Fee</p>
            <p>₹30,507</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Discount</p>
            <p className="text-[#4BAF32]">- ₹46,699</p>
          </div>
        </div>
        <div className="text-4xl font-Coolvetica text-[#4BAF32] mt-4 flex justify-between">
          <p>Total</p>
          <p>₹2,46,919</p>
        </div>
      </div>
    </div>
  );
}
