import '../index.css'

function BotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 min-h-screen p-8 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8">Your Bot Army</h2>
      {army.length === 0 ? (
        <p className="text-center text-indigo-300 text-lg">
          No bots enlisted yet. Click on a bot to add it to your army!
        </p>
      ) : (
        <div className="army-list grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {army.map((bot) => (
            <div
              key={bot.id}
              className="army-bot bg-gradient-to-b from-indigo-700 to-purple-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 p-4 text-center"
            >
              <img
                src={bot.avatar_url}
                alt={bot.name}
                className="w-32 h-32 mx-auto rounded-full border-4 border-purple-500 shadow-lg"
              />
              <h3 className="text-2xl font-bold mt-4">{bot.name}</h3>
              <div className="army-bot-actions mt-6 space-x-4">
                <button
                  onClick={() => releaseBot(bot.id)}
                  className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  Release
                </button>
                <button
                  onClick={() => dischargeBot(bot.id)}
                  className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  Discharge
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BotArmy;