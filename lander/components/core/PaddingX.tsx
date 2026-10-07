type Props = {
  children: React.ReactNode;
};

export default function PaddingX({children}:Props){
    return (
        <div className="px-8 lg:px-36 flex justify-center w-full">
            {children}
        </div>
    )
}