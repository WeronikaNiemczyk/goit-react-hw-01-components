import { data } from 'data';

export const Statistics = (title, stats) => {
  //   const { id, label, percentage } = data;
  return (
    <>
      <section className="statistics">
        <h2 className="title">Upload stats</h2>

        <ul className="stat-list">
          {data.map((d, index) => (
            <li className="item" key={index}>
              <span className="label">{d.label}</span>
              <br></br>
              <span className="percentage">{d.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};