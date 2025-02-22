export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-6">
      <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:text-left md:justify-between">
        <p className="text-teal-400 text-2xl hover:scale-110 shadow-md cursor-pointer">Let connect with me ➜</p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 md:space-x-24 mt-4 md:mt-0">
          <div>
            <h4 className="text-2xl font-bold">Email</h4>
            <p className="text-teal-500 text-lg hover:text-teal-400 cursor-pointer">in.seng@institute.pse.ngo</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">Phone</h4>
            <p className="text-teal-500 text-lg hover:text-teal-400 cursor-pointer">0713973757</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">Address</h4>
            <p className="text-teal-500 text-lg hover:text-teal-400 cursor-pointer">Stueng Mean Chey, Phnom Penh City</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
