import { useResponsive } from '../../libs/hooks/useResponsive';
import { useTheme } from '../../libs/hooks/useTheme';
import type { Contact } from '../../libs/types/contact';
import { cm } from '../../libs/utils/cm';
import { Typography } from './Typography';

interface ContactProps {
  contact: Contact;
}

const ContactVisual: React.FC<ContactProps> = ({ contact }) => {
  const { theme } = useTheme();
  const { isMobile } = useResponsive();

  return (
    <a href={contact.url} target='_blank'>
      <div className='flex flex-col justify-between items-center border rounded gap-2 p-4 aspect-square h-auto transition-all bg-[#0005] hover:bg-bg-400'>
        <img
          src={`/icons/${contact.icon}.svg`}
          className={cm(
            'w-full grow px-4 object-contain',
            theme === 'dark' && 'invert',
          )}
        />
        <Typography
          style={{
            fontSize: isMobile ? '10px' : '13px',
          }}
          className='break-keep text-center'
        >
          {contact.name}
        </Typography>
      </div>
    </a>
  );
};

interface ContactsProps {
  contacts: Contact[];
}

export const Contacts: React.FC<ContactsProps> = ({ contacts }) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {contacts.map((contact) => (
        <ContactVisual contact={contact} key={contact.name} />
      ))}
    </div>
  );
};
