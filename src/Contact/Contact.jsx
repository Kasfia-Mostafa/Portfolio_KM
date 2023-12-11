import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm("gmail", "template_64wlmg1", form.current, "LXyFUKy3cS1FeSfiN")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const notify = () => toast.success("Message sent successfully");

  return (
    <div className="bg-[#fcdac1] flex">
      <div>
        <img className="w-5/6 h-full" src="/src/assets/OIG.jpeg" alt="" />
      </div>
      <div className="pt-10">
        <h2 className="text-8xl text-orange-800 font-bold ">
          Contact <span className="text-orange-600">Me</span>
        </h2>
        <div>
          <div id="create-course-form" className="w-full  ">
            <form className="card-body" onSubmit={sendEmail}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-orange-600 font-bold">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input text-black bg-white"
                  name="from_name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-orange-600 font-bold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input text-black bg-white"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-orange-600 font-bold">
                    Phone Number
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="number"
                  className="input text-black bg-white"
                  name="phone"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-orange-600 font-bold">
                    Message
                  </span>
                </label>
                <textarea
                  type="text"
                  placeholder="message"
                  className="input text-black w-full h-60 bg-white p-3"
                  name="message"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={notify}
                  className="btn bg-gradient-to-tr from-orange-500 to-orange-300 border-none text-white"
                >
                  Sent Message
                </button>
                <Toaster />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
