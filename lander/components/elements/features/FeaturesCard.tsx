type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function FeaturesCard({title,description,children}:Props){
    return (
        <div className="border border-white p-8 rounded-lg shadow-[0_0_20px_0] shadow-primary flex flex-col gap-2 items-center">
            {children}
            <h3 className="text-white text-2xl font-bold text-center">{title}</h3>
            <p className="text-white text-center">{description}</p>
        </div>
    )
}