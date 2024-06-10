import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, addToArmy, dischargeBot }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onClick={() => addToArmy(bot)} dischargeBot={dischargeBot} />
      ))}
    </div>
  );
}

export default BotCollection;
