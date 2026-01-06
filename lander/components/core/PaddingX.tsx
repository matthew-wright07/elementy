type Props = {
  children: React.ReactNode;
};

export default function PaddingX({children}:Props){
    return (
        <div className="px-8 lg:px-32">
            {children}
        </div>
    )
}