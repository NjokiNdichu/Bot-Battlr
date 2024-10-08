import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, removeFromArmy, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-army-collection">
        {army.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={() => removeFromArmy(bot)} dischargeBot={dischargeBot} />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
