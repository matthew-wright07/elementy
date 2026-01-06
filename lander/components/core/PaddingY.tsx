type Props = {
  children: React.ReactNode;
};

export default function PaddingY({children}:Props){
    return (
        <div className="py-12">
            {children}
        </div>
    )
}