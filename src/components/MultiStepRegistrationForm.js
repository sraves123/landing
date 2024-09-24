import React, { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";
import topImg from "../images/topImg.jpg";
import hosptImg from "../images/pic2.jpg";

const steps = [
  "Personal Information",
  "Medical History",
  "Genetic History",
  "Lifestyle Factors",
  "Testing Preferences",
  "Marketing-Related Questions",
  "Confirmation",
];

const TermsAndConditionsModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="shadow-lg rounded-2xl overflow-hidden p-0 w-[75%] h-[85%] bg-blue-100">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-slate-600 p-6 rounded-2xl shadow-lg  md:w-1/2 w-6/12"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="font-semibold text-lg">Terms & Conditions</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mt-2">
            By using this application, you agree to abide by these terms.
          </p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const PersonalInformationForm = ({ formData, setFormData }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      dateOfBirth: date,
    }));
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required={true}
        />
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className="flex gap-4">
        <div className="relative flex-grow">
          <DatePicker
            selected={formData.dateOfBirth}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            placeholderText="DOB"
            className="w-full px-2 py-2 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <Calendar
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            size={20}
          />
        </div>
        <select
          className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="notToSay">Prefer not to say</option>
          <option value="other">Other</option>
        </select>
      </div>
      {formData.gender === "other" && (
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Specify Gender"
          name="otherGender"
          value={formData.otherGender}
          onChange={handleChange}
        />
      )}
      {/* <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="tel"
        placeholder="Mobile Number"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleChange}
        required
      /> */}
      {/* Terms & Conditions Section */}
      <div className="space-y-4">
        <span
          onClick={toggleModal}
          className=" text-red-800 active:underline cursor-pointer mt-4 hover:text-blue-600 active:text-blue-700"
        >
          Terms & Conditions
        </span>
      </div>
      <div className="flex items-start sm:items-center">
        <div>
          <input
            type="checkbox"
            id="agreeToShareDetails"
            name="agreeToShareDetails"
            checked={formData.agreeToShareDetails}
            onChange={handleChange}
            className="mr-2"
          />
        </div>
        <label htmlFor="agreeToShareDetails">I agree to share my details</label>
      </div>
      <div className="flex items-start sm:items-center">
        <div>
          <input
            type="checkbox"
            id="wantToGetInTouch"
            name="wantToGetInTouch"
            checked={formData.wantToGetInTouch}
            onChange={(e) =>
              setFormData({ ...formData, wantToGetInTouch: e.target.checked })
            }
            className="mr-2"
          />
        </div>
        <label htmlFor="wantToGetInTouch">
          I want to get in touch with the lab
        </label>
      </div>
      {formData.wantToGetInTouch && (
        <>
          <div>
            <label className="block mb-2">Preferred Contact Method:</label>
            <div className="space-x-4">
              {["mobile", "email"].map((value) => (
                <label key={value} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="contactPreference"
                    value={value}
                    checked={formData.contactPreference === value}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contactPreference: e.target.value,
                      })
                    }
                    className="mr-2"
                  />
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {formData.contactPreference === "mobile" && (
            <div>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>
          )}

          {formData.contactPreference === "email" && (
            <div>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                placeholder="Email Id"
                name="emailId"
                onChange={handleChange}
              />
            </div>
          )}
        </>
      )}
      {/* Modal for Terms & Conditions */}
      <TermsAndConditionsModal
        isVisible={isModalVisible}
        onClose={toggleModal}
      />
    </div>
  );
};

// const MedicalHistoryForm = ({ formData, setFormData }) => (
//   <div className="space-y-4">
//     <div>
//       <label className="block mb-2">
//         Do you have any known medical conditions?
//       </label>
//       <textarea
//         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         rows="3"
//         name="medicalConditions"
//         value={formData.medicalConditions}
//         onChange={(e) =>
//           setFormData({ ...formData, medicalConditions: e.target.value })
//         }
//       />
//     </div>
//     <div>
//       <label className="block mb-2">
//         Have you been diagnosed with any hereditary conditions?
//       </label>
//       <textarea
//         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         rows="3"
//         name="hereditaryConditions"
//         value={formData.hereditaryConditions}
//         onChange={(e) =>
//           setFormData({ ...formData, hereditaryConditions: e.target.value })
//         }
//       />
//     </div>
//     <div>
//       <label className="block mb-2">
//         Are you currently taking any medications?
//       </label>
//       <textarea
//         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         rows="3"
//         name="currentMedications"
//         value={formData.currentMedications}
//         onChange={(e) =>
//           setFormData({ ...formData, currentMedications: e.target.value })
//         }
//       />
//     </div>
//     <div>
//       <label className="block mb-2">Do you have any allergies?</label>
//       <textarea
//         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         rows="3"
//         name="allergies"
//         value={formData.allergies}
//         onChange={(e) =>
//           setFormData({ ...formData, allergies: e.target.value })
//         }
//       />
//     </div>
//     <div>
//       <label className="block mb-2">
//         Have you undergone any medical tests in the past years?
//       </label>
//       <textarea
//         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         rows="3"
//         name="recentMedicalTests"
//         value={formData.recentMedicalTests}
//         onChange={(e) =>
//           setFormData({ ...formData, recentMedicalTests: e.target.value })
//         }
//       />
//     </div>
//   </div>
// );

const MedicalHistoryForm = ({ formData, setFormData }) => {
  const [hasMedicalConditions, setHasMedicalConditions] = useState(null);
  const [hasHereditaryConditions, setHasHereditaryConditions] = useState(null);
  const [isTakingMedications, setIsTakingMedications] = useState(null);
  const [hasAllergies, setHasAllergies] = useState(null);
  const [hasRecentTests, setHasRecentTests] = useState(null);

  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-2">
          Do you have any known medical conditions? If yes, please specify:
        </label>
        <div className="flex space-x-4 mb-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="medicalConditions"
              value="yes"
              checked={hasMedicalConditions === "yes"}
              onChange={() => {
                setHasMedicalConditions("yes");
                setFormData({ ...formData, medicalConditions: "" });
              }}
              className="mr-2"
            />
            Yes
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="medicalConditions"
              value="no"
              checked={hasMedicalConditions === "no"}
              onChange={() => {
                setHasMedicalConditions("no");
                setFormData({ ...formData, medicalConditions: "" });
              }}
              className="mr-2"
            />
            No
          </label>
        </div>
        {hasMedicalConditions === "yes" && (
          <input
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            type="text"
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={(e) =>
              setFormData({ ...formData, medicalConditions: e.target.value })
            }
          />
        )}
      </div>

      <div>
        <label className="block mb-2">
          Have you been diagnosed with any hereditary conditions? If yes, please
          specify:
        </label>
        <div className="flex space-x-4 mb-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="hereditaryConditions"
              value="yes"
              checked={hasHereditaryConditions === "yes"}
              onChange={() => {
                setHasHereditaryConditions("yes");
                setFormData({ ...formData, hereditaryConditions: "" });
              }}
              className="mr-2"
            />
            Yes
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="hereditaryConditions"
              value="no"
              checked={hasHereditaryConditions === "no"}
              onChange={() => {
                setHasHereditaryConditions("no");
                setFormData({ ...formData, hereditaryConditions: "" });
              }}
              className="mr-2"
            />
            No
          </label>
        </div>
        {hasHereditaryConditions === "yes" && (
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            type="text"
            name="hereditaryConditions"
            value={formData.hereditaryConditions}
            onChange={(e) =>
              setFormData({ ...formData, hereditaryConditions: e.target.value })
            }
          />
        )}
      </div>

      <div>
        <label className="block mb-2">
          Are you currently taking any medications? If yes, please specify:
        </label>
        <div className="flex space-x-4 mb-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="currentMedications"
              value="yes"
              checked={isTakingMedications === "yes"}
              onChange={() => {
                setIsTakingMedications("yes");
                setFormData({ ...formData, currentMedications: "" });
              }}
              className="mr-2"
            />
            Yes
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="currentMedications"
              value="no"
              checked={isTakingMedications === "no"}
              onChange={() => {
                setIsTakingMedications("no");
                setFormData({ ...formData, currentMedications: "" });
              }}
              className="mr-2"
            />
            No
          </label>
        </div>
        {isTakingMedications === "yes" && (
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            type="text"
            name="currentMedications"
            value={formData.currentMedications}
            onChange={(e) =>
              setFormData({ ...formData, currentMedications: e.target.value })
            }
          />
        )}
      </div>

      <div>
        <label className="block mb-2">
          Do you have any allergies? If yes, please specify:
        </label>
        <div className="flex space-x-4 mb-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="allergies"
              value="yes"
              checked={hasAllergies === "yes"}
              onChange={() => {
                setHasAllergies("yes");
                setFormData({ ...formData, allergies: "" });
              }}
              className="mr-2"
            />
            Yes
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="allergies"
              value="no"
              checked={hasAllergies === "no"}
              onChange={() => {
                setHasAllergies("no");
                setFormData({ ...formData, allergies: "" });
              }}
              className="mr-2"
            />
            No
          </label>
        </div>
        {hasAllergies === "yes" && (
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            type="text"
            name="allergies"
            value={formData.allergies}
            onChange={(e) =>
              setFormData({ ...formData, allergies: e.target.value })
            }
          />
        )}
      </div>

      <div>
        <label className="block mb-2">
          Have you undergone any medical tests in the past years? If yes, please
          specify:
        </label>
        <div className="flex space-x-4 mb-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="recentMedicalTests"
              value="yes"
              checked={hasRecentTests === "yes"}
              onChange={() => {
                setHasRecentTests("yes");
                setFormData({ ...formData, recentMedicalTests: "" });
              }}
              className="mr-2"
            />
            Yes
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="recentMedicalTests"
              value="no"
              checked={hasRecentTests === "no"}
              onChange={() => {
                setHasRecentTests("no");
                setFormData({ ...formData, recentMedicalTests: "" });
              }}
              className="mr-2"
            />
            No
          </label>
        </div>
        {hasRecentTests === "yes" && (
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            type="text"
            name="recentMedicalTests"
            value={formData.recentMedicalTests}
            onChange={(e) =>
              setFormData({ ...formData, recentMedicalTests: e.target.value })
            }
          />
        )}
      </div>
    </div>
  );
};

const GeneticHistoryForm = ({ formData, setFormData }) => {
  const [hasFamilyGeneticDisorders, setHasFamilyGeneticDisorders] =
    useState(null);
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-2">
          Do you have a family history of genetic disorders?
        </label>
        <div className="flex space-x-4 mb-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="familyGeneticDisorders"
              value="yes"
              checked={hasFamilyGeneticDisorders === "yes"}
              onChange={() => {
                setHasFamilyGeneticDisorders("yes");
                setFormData({ ...formData, familyGeneticDisorders: "" });
              }}
              className="mr-2"
            />
            Yes
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="familyGeneticDisorders"
              value="no"
              checked={hasFamilyGeneticDisorders === "no"}
              onChange={() => {
                setHasFamilyGeneticDisorders("no");
                setFormData({ ...formData, familyGeneticDisorders: "" });
              }}
              className="mr-2"
            />
            No
          </label>
        </div>
        {hasFamilyGeneticDisorders === "yes" && (
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            type="text"
            name="familyGeneticDisorders"
            value={formData.familyGeneticDisorders}
            onChange={(e) =>
              setFormData({
                ...formData,
                familyGeneticDisorders: e.target.value,
              })
            }
          />
        )}
      </div>
      <div>
        <label className="block mb-2">
          Has anyone in your family undergone genetic testing before?
        </label>
        <div className="space-x-4">
          {["yes", "no", "unknown"].map((value) => (
            <label key={value} className="inline-flex items-center">
              <input
                type="radio"
                name="familyGeneticTesting"
                value={value}
                checked={formData.familyGeneticTesting === value}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    familyGeneticTesting: e.target.value,
                  })
                }
                className="mr-2"
              />
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block mb-2">
          Are you interested in learning about potential hereditary risks?
        </label>
        <div className="space-x-4">
          {["yes", "no"].map((value) => (
            <label key={value} className="inline-flex items-center">
              <input
                type="radio"
                name="interestedInHereditaryRisks"
                value={value}
                checked={formData.interestedInHereditaryRisks === value}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    interestedInHereditaryRisks: e.target.value,
                  })
                }
                className="mr-2"
              />
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

const LifestyleFactorsForm = ({ formData, setFormData }) => (
  <div className="space-y-4">
    <div>
      <label className="block mb-2">
        Do you smoke or use tobacco products?
      </label>
      <div className="space-x-4">
        {["yes", "no"].map((value) => (
          <label key={value} className="inline-flex items-center">
            <input
              type="radio"
              name="smoker"
              value={value}
              checked={formData.smoker === value}
              onChange={(e) =>
                setFormData({ ...formData, smoker: e.target.value })
              }
              className="mr-2"
            />
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </label>
        ))}
      </div>
    </div>
    <div>
      <label className="block mb-2">How often do you consume alcohol?</label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="alcoholConsumption"
        value={formData.alcoholConsumption}
        onChange={(e) =>
          setFormData({ ...formData, alcoholConsumption: e.target.value })
        }
      >
        <option value="">Select frequency</option>
        <option value="never">Never</option>
        <option value="rarely">Rarely</option>
        <option value="occasionally">Occasionally</option>
        <option value="regularly">Regularly</option>
      </select>
    </div>
  </div>
);

const TestingPreferencesForm = ({ formData, setFormData }) => (
  <div className="space-y-4">
    <div>
      <label className="block mb-2">
        What type of genetic or health test are you most interested in?
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="testType"
        value={formData.testType}
        onChange={(e) => setFormData({ ...formData, testType: e.target.value })}
      >
        <option value="">Select test type</option>
        <option value="ancestry">Ancestry</option>
        <option value="healthRisks">Health Risks</option>
        <option value="nutrition">Nutrition</option>
      </select>
    </div>
    <div>
      <label className="block mb-2">Testing preference:</label>
      <div className="md:space-x-4">
        {[
          { value: "atHome", label: "At-home testing kits" },
          { value: "clinic", label: "Testing in a clinic" },
        ].map(({ value, label }) => (
          <label key={value} className="inline-flex items-center">
            <input
              type="radio"
              name="testingPreference"
              value={value}
              checked={formData.testingPreference === value}
              onChange={(e) =>
                setFormData({ ...formData, testingPreference: e.target.value })
              }
              className="mr-2"
            />
            {label}
          </label>
        ))}
      </div>
    </div>
    <div>
      <label className="block mb-2">
        How frequently would you be interested in receiving health updates or
        monitoring?
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="updateFrequency"
        value={formData.updateFrequency}
        onChange={(e) =>
          setFormData({ ...formData, updateFrequency: e.target.value })
        }
      >
        <option value="">Select frequency</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="quarterly">Quarterly</option>
        <option value="annually">Annually</option>
      </select>
    </div>
  </div>
);

const MarketingQuestionsForm = ({ formData, setFormData }) => (
  <div className="space-y-4">
    <div>
      <label className="block mb-2">
        What factors influenced your decision to explore genetic/health testing?
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="3"
        type="text"
        name="decisionFactors"
        value={formData.decisionFactors}
        onChange={(e) =>
          setFormData({ ...formData, decisionFactors: e.target.value })
        }
      />
    </div>
    <div>
      <label className="block mb-2">
        What is the most important feature you look for in a genetic testing
        service?
      </label>
      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="importantFeature"
        value={formData.importantFeature}
        onChange={(e) =>
          setFormData({ ...formData, importantFeature: e.target.value })
        }
      >
        <option value="">Select feature</option>
        <option value="accuracy">Accuracy</option>
        <option value="cost">Cost</option>
        <option value="speed">Speed of results</option>
      </select>
    </div>
  </div>
);

const ConfirmationPage = ({ formData }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-blue-100 p-6 rounded-lg"
  >
    <h2 className="text-2xl sm:text-3xl  font-bold text-green-800 mb-4">
      Submitted Information
    </h2>
    <div className="grid grid-cols-1  gap-4">
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="mb-2">
          <span className="font-semibold text-green-700">
            {key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
            :
          </span>
          <span className="text-green-900 ml-2">
            {key === "dateOfBirth"
              ? value
                ? new Date(value).toLocaleDateString()
                : "Not provided"
              : typeof value === "boolean"
              ? value
                ? "Yes"
                : "No"
              : value || "Not provided"}
          </span>
          {/* <span className="text-green-900 ml-2">
            {key === "contactPreference"
              ? value || "Not provided"
              : typeof value === "boolean"
              ? value
                ? "Yes"
                : "No"
              : value || "Not provided"}
          </span> */}
        </div>
      ))}
    </div>
    {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-6 text-center text-lg font-semibold text-green-700"
      >
        Thank you for submitting your information. You can now close this page.
      </motion.div> */}
  </motion.div>
);

const MultiStepRegistrationForm = ({ onFormSubmit }) => {
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    otherGender: "",
    contactPreference: "",
    mobileNumber: "",
    email: "",
    agreeToShareDetails: false,
    wantToGetInTouch: false,

    // Medical History
    medicalConditions: "",
    hereditaryConditions: "",
    currentMedications: "",
    allergies: "",
    recentMedicalTests: "",

    // Genetic History
    familyGeneticDisorders: "",
    familyGeneticTesting: "",
    interestedInHereditaryRisks: "",

    // Lifestyle Factors
    smoker: "",
    alcoholConsumption: "",

    // Testing Preferences
    testType: "",
    testingPreference: "",
    updateFrequency: "",

    // Marketing-Related Questions
    decisionFactors: "",
    importantFeature: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // const handleNext = () => {
  //   // Define validation based on the current step
  //   const currentStepValidation = () => {
  //     switch (activeStep) {
  //       case 0: // Personal Information
  //         return (
  //           formData.firstName.trim() !== "" &&
  //           formData.lastName.trim() !== "" &&
  //           formData.dateOfBirth !== null &&
  //           (formData.gender !== "" || formData.otherGender.trim() !== "") &&
  //           (formData.wantToGetInTouch
  //             ? formData.contactPreference !== ""
  //             : true) &&
  //           (formData.wantToGetInTouch
  //             ? formData.contactPreference === "mobile"
  //               ? formData.mobileNumber.trim() !== ""
  //               : formData.email.trim() !== ""
  //             : true)
  //         );
  //       case 1: // Medical History
  //         return (
  //           formData.medicalConditions.trim() !== "" &&
  //           formData.allergies.trim() !== ""
  //         );
  //       case 2: // Genetic History
  //         return formData.familyGeneticDisorders.trim() !== "";
  //       case 3: // Lifestyle Factors
  //         return formData.smoker !== "";
  //       case 4: // Testing Preferences
  //         return formData.testType !== "";
  //       case 5: // Marketing Questions
  //         return (
  //           formData.decisionFactors.trim() !== "" &&
  //           formData.importantFeature !== ""
  //         );
  //       default:
  //         return true;
  //     }
  //   };

  //   if (currentStepValidation()) {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   } else {
  //     alert("Please fill in the required fields.");
  //   }
  // };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    const submissionData = JSON.stringify(formData, null, 2);
    console.log("Form Submission Data:", submissionData);
    setShowThankYou(true);
    if (onFormSubmit) {
      onFormSubmit();
    }
    handleNext();
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonalInformationForm
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 1:
        return (
          <MedicalHistoryForm formData={formData} setFormData={setFormData} />
        );
      case 2:
        return (
          <GeneticHistoryForm formData={formData} setFormData={setFormData} />
        );
      case 3:
        return (
          <LifestyleFactorsForm formData={formData} setFormData={setFormData} />
        );
      case 4:
        return (
          <TestingPreferencesForm
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 5:
        return (
          <MarketingQuestionsForm
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 6:
        return <ConfirmationPage formData={formData} />;
      default:
        return "Unknown step";
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center bg-slate-500">
      <div className="shadow-lg rounded-2xl overflow-hidden p-0 w-[75%] h-[85%] bg-blue-100">
        <div className="flex flex-col md:flex-row h-full">
          <div
            className="block md:hidden w-full max-w-full h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${topImg})` }}
          ></div>

          <div className="flex-1 p-6 overflow-y-auto no-scrollbar">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto lg:p-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">
                Do your Genetic Test with us
              </h2>
              <div className="mb-8">
                <ol className="flex items-center w-full">
                  {steps.map((step, index) => (
                    <li
                      key={step}
                      className={`flex w-full items-center ${
                        index < steps.length - 1
                          ? 'after:content-[""] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-4 after:inline-block'
                          : ""
                      }`}
                    >
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`flex items-center justify-center w-7 h-7 rounded-full lg:h-12 lg:w-12 shrink-0 ${
                          activeStep >= index
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {index + 1}
                      </motion.span>
                    </li>
                  ))}
                </ol>
              </div>
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {getStepContent(activeStep)}
              </motion.div>
              <div className="mt-8 flex justify-around">
                {activeStep > 0 && activeStep < steps.length && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
                    onClick={handleBack}
                  >
                    Back
                  </motion.button>
                )}
                {activeStep < steps.length - 1 ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                    onClick={handleNext}
                  >
                    Next
                  </motion.button>
                ) : activeStep === steps.length - 1 ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                    onClick={handleSubmit}
                  >
                    Submit
                  </motion.button>
                ) : null}
              </div>
            </motion.div>
          </div>
          <div className="hidden md:block flex-1">
            <div
              className="bg-contain w-full h-full bg-no-repeat bg-[#dae9ff]"
              style={{
                backgroundImage: `url(${hosptImg})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepRegistrationForm;
