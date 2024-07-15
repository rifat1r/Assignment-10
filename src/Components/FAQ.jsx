const FAQ = () => {
  return (
    <div className="space-y-5">
      <div className="text-center my-10">
        <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-400 mt-3">
          Get Answers to Common Questions About Southeast Asia Travel
        </p>
        <div className="w-2/3 md:w-1/2 mx-auto mt-3">
          <hr />
          <hr />
          <hr />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Is Southeast Asia safe for solo travelers?
        </div>
        <div className="collapse-content">
          <p>
            Southeast Asia is generally safe for solo travelers. However, it's
            always important to stay aware of your surroundings, avoid risky
            areas, and follow local advice and regulations.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What are the must-see tourist spots in Southeast Asia?
        </div>
        <div className="collapse-content">
          <p>
            Some must-see spots include Angkor Wat in Cambodia, Ha Long Bay in
            Vietnam, Bali in Indonesia, and the temples of Thailand. Each
            country has its unique attractions worth exploring.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What is the best time to visit Southeast Asia?
        </div>
        <div className="collapse-content">
          <p>
            The best time to visit Southeast Asia generally depends on the
            specific country. However, the dry season from November to April is
            often considered the most pleasant, as it avoids the heavy monsoon
            rains.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Do I need a visa to travel to Southeast Asia?
        </div>
        <div className="collapse-content">
          <p>
            Visa requirements vary by country. Many Southeast Asian countries
            offer visa-free entry or visa on arrival for short stays to citizens
            of many countries. It’s best to check the specific requirements for
            each country you plan to visit.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How can I travel between countries in Southeast Asia?
        </div>
        <div className="collapse-content">
          <p>
            Traveling between countries in Southeast Asia is relatively easy
            with options such as budget airlines, buses, and trains. Each mode
            of transport offers a different experience and price point.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What are some cultural etiquettes to be aware of in Southeast Asia?
        </div>
        <div className="collapse-content">
          <p>
            Respect local customs and traditions, such as removing shoes before
            entering homes and temples, dressing modestly, and greeting people
            with a smile. Learning a few basic phrases in the local language can
            also be appreciated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
