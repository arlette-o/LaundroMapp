import Image from "next/image";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import HeaderText from "@/components/headerText";
import TermsConditions from "@/public/assets/TermsAndConditions.jpg";

export default function Terms() {
  return (
    <>
      <Card>
        <Image
          src={TermsConditions}
          alt="Header Image"
          height={100}
          width={2000}
        />
      </Card>
      <Box display={"flex"} justifyContent={"center"} sx={{ mt: 5 }}>
        <Box textAlign="left" sx={{ marginRight: 20, marginLeft: 20 }}>
          <HeaderText title="Delivery" />
          <Typography fontWeight={700}> Effective Date: 8/15/24</Typography>
          <Typography>
            1. Introduction Welcome to [Laundry Service Name]! These Terms and
            Conditions outline the rules and guidelines for using our laundry
            delivery services. By accessing or using our service, you agree to
            comply with and be bound by these Terms and Conditions. <br />
            2. Service Overview [Laundry Service Name] provides laundry pickup
            and delivery services. Services include laundry washing, drying,
            folding, and delivery to designated addresses. <br />
            3. Service Area Our delivery service is available within the
            following areas: [List Areas]. We reserve the right to expand or
            limit our service area at our discretion. <br />
            4. Account Creation To use our delivery service, you may need to
            create an account. You are responsible for maintaining the
            confidentiality of your account information and for all activities
            under your account. <br />
            5. Booking and Scheduling Booking: Schedule your pickup and delivery
            through our website, mobile app, or customer service hotline.
            Timing: We will provide a time window for pickup and delivery. While
            we strive to adhere to scheduled times, we cannot guarantee exact
            timings due to factors beyond our control. Changes and
            Cancellations: Any changes or cancellations must be made at least [X
            hours/days] before the scheduled time. Failure to do so may incur a
            cancellation fee. <br />
            6. Pricing and Payment Pricing: Prices are as stated on our website
            or app and are subject to change. Additional fees may apply for
            special services or delivery areas. Payment: Payment is due upon
            receipt of invoice. We accept [list payment methods]. Late payments
            may incur additional charges. <br />
            7. Items Accepted We accept standard laundry items, including
            clothing, bed linens, and towels. We do not accept items that
            require dry cleaning, hazardous materials, or items that are heavily
            soiled beyond normal use. <br />
            8. Liability Damage: We take great care with your items. However,
            [Laundry Service Name] is not liable for damage to or loss of items
            due to pre-existing conditions or improper handling. Loss: In the
            rare event of loss, our liability is limited to the replacement
            value of the item as determined by us. <br />
            9. Delivery Delivery Process: We will deliver cleaned items to the
            address provided. Ensure someone is present to receive the delivery.
            If delivery is missed, a re-delivery fee may apply. Access: Provide
            accurate delivery instructions. We are not responsible for delays
            due to incorrect or incomplete delivery addresses. <br />
            10. Customer Responsibilities Accuracy: Ensure that all items for
            pickup are clearly identified and accounted for. Safety: We reserve
            the right to refuse service if any items are deemed unsafe or unfit
            for handling. <br />
            11. Privacy and Data Security Your personal information is collected
            and used in accordance with our Privacy Policy [link to Privacy
            Policy]. We are committed to protecting your data. <br />
            12. Termination We reserve the right to suspend or terminate your
            account or access to our services if you breach these Terms and
            Conditions or for any reason at our discretion. <br />
            13. Modifications We may update these Terms and Conditions from time
            to time. Changes will be posted on our website or app and will be
            effective immediately upon posting. <br />
            14. Governing Law These Terms and Conditions are governed by and
            construed in accordance with the laws of [Your State/Country]. Any
            disputes will be resolved in the courts of [Your State/Country].{" "}
            <br />
            15. Contact Us For questions or concerns regarding these Terms and
            Conditions or our services, please contact us at: Phone: [Customer
            Service Phone Number] Email: [Customer Service Email Address]
            Address: [Company Address]
          </Typography>
        </Box>
      </Box>
    </>
  );
}
