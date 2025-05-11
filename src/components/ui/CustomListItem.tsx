export default function CustomListItem({ label }: { label: string }) {
  return (
    <li className="group h-[32px] p-2 overflow-hidden">
      <div className="flex flex-col items-center justify-center group-hover:-translate-y-7.5 group-hover:font-medium transition duration-700">
        <span>{label}</span>
        <span>{label}</span>
      </div>
    </li>
  );
}
