import { redirect } from "next/navigation";

import { googleLeaveReviewUrl } from "@/data/nap";

export default function LeaveAReviewPage() {
  redirect(googleLeaveReviewUrl);
}