import Layout from '@/components/layouts/admin';
import CreateOrUpdateShippingForm from '@/components/shipping/shipping-form';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function CreateShippingPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex border-b border-dashed border-border-base pb-5 md:pb-7">
        <h1 className="text-lg font-semibold text-heading">
          {t('form:form-title-create-shipping')}
        </h1>
      </div>
      <CreateOrUpdateShippingForm />
    </>
  );
}
CreateShippingPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['table', 'form', 'common'])),
  },
});
