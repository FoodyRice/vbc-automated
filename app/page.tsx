import { useState } from 'react';

export default function Home() {
  const [attendees, setAttendees] = useState(0);
  const [results, setResults] = useState({});

  const calculate = () => {
    const totalAttendees = parseInt(attendees, 10);

    const concessions = {
      popcorn: Math.round(totalAttendees * 0.43),
      iceCream: Math.round(totalAttendees * 0.50),
      pretzels: Math.round(totalAttendees * 0.18),
      bottledSoda: Math.round(totalAttendees * 0.45),
      fountainDrinks: Math.round(totalAttendees * 0.57),
      chips: Math.round(totalAttendees * 0.20),
    };

    const staffing = {
      ushers: Math.ceil(totalAttendees / 400),
      security: Math.ceil(totalAttendees / 300),
      ticketTakers: Math.ceil(totalAttendees / 1350),
      parkingCashiers: Math.min(Math.ceil(totalAttendees / 525), 16),
      parkingAttendants: Math.min(Math.ceil(totalAttendees / 200), 42),
    };

    const parking = {
      satelliteLots: totalAttendees > 8250 ? Math.floor((totalAttendees - 8250) / 1680) : 0,
    };

    setResults({ concessions, staffing, parking });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Event Staffing and Concessions Calculator</h1>
      <input
        type="number"
        value={attendees}
        onChange={(e) => setAttendees(e.target.value)}
        placeholder="Enter number of attendees"
      />
      <button onClick={calculate}>Calculate</button>

      {results.concessions && (
        <div style={{ marginTop: '20px' }}>
          <h2>Concessions</h2>
          <ul>
            <li>Popcorn: {results.concessions.popcorn}</li>
            <li>Ice Cream: {results.concessions.iceCream}</li>
            <li>Pretzels: {results.concessions.pretzels}</li>
            <li>Bottled Soda: {results.concessions.bottledSoda}</li>
            <li>Fountain Drinks: {results.concessions.fountainDrinks}</li>
            <li>Chips: {results.concessions.chips}</li>
          </ul>

          <h2>Staffing</h2>
          <ul>
            <li>Ushers: {results.staffing.ushers}</li>
            <li>Stadium Security: {results.staffing.security}</li>
            <li>Ticket Takers: {results.staffing.ticketTakers}</li>
            <li>Parking Cashiers: {results.staffing.parkingCashiers}</li>
            <li>Parking Attendants: {results.staffing.parkingAttendants}</li>
          </ul>

          <h2>Parking</h2>
          <ul>
            <li>Satellite Lots: {results.parking.satelliteLots}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
