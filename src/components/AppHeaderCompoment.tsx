"use client";

export default function ({
  username,
  date,
}: {
  username: string;
  date: number;
}) {
  let dateObj = new Date(date);
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let dateFormatter = Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "long",
    year: "numeric",
    day: "numeric",
  });

  const dateString = dateFormatter
    .format(dateObj)
    .toString()
    .replaceAll(",", ""); //Sun January 5 2025
  const dateStringArray = dateString.split(" ");
  let displayDateString = `${dateStringArray[0]} ${dateStringArray[2]} ${dateStringArray[1]} ${dateStringArray[3]}`;

  return (
    <div>
      <div>
        <h3>
          Good Morning, <span>{username}</span>
        </h3>
        <p>Today, {displayDateString}</p>
      </div>
    </div>
  );
}
