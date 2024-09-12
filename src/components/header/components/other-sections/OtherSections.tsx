import { LinkText } from '../../../link-text/LinkText';
export const OtherSections = () => {
    return (
        <div className="hidden lg:flex lg:gap-x-8">
            <LinkText route="/about">О нас</LinkText>
            <LinkText route="/marketplace">Магазин</LinkText>
            <LinkText route="/contacts">Контакты</LinkText>
        </div>
    );
};
