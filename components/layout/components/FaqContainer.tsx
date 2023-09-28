import {  useMessages } from "next-intl";
import { Faq } from "./Faq";

const FaqContainer = () =>  {      
    const messages:any = useMessages();
    const faqs = Object.keys(messages.home.footer.faqs)     
    
  return (
    <ul className='text-2xl my-4 lg:my-16'>        
        {faqs.map(value => (
            <Faq keyValue={value} key={value} messages={messages} />
        ))}
    </ul>
  )
}

export default FaqContainer