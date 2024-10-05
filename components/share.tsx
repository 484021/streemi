// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from "@/components/ui/card";
// import Link from "next/link";
// import { Separator } from "@/components/ui/separator";
// import { Button } from "@/components/ui/button";
// import {
//   FacebookIcon,
//   TwitterIcon,
//   LinkedinIcon,
//   InstagramIcon,
//   YoutubeIcon,
// } from "lucide-react";

// export default function SocialShare({ currentLink }: { currentLink: string }) {
//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardHeader>
//         <CardTitle>Share this page</CardTitle>
//         <CardDescription>
//           Share this anime on your favorite social media platforms.
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="grid gap-4">
//         <div className="flex items-center justify-center gap-4">
//           <Link href="#" className="group" prefetch={false}>
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877f2] transition-colors group-hover:bg-[#1877f2]/80">
//               <FacebookIcon className="h-5 w-5 text-white" />
//               <span className="sr-only">Share on Facebook</span>
//             </div>
//           </Link>
//           <Link href="#" className="group" prefetch={false}>
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1da1f2] transition-colors group-hover:bg-[#1da1f2]/80">
//               <TwitterIcon className="h-5 w-5 text-white" />
//               <span className="sr-only">Share on Twitter</span>
//             </div>
//           </Link>
//           <Link href="#" className="group" prefetch={false}>
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a66c2] transition-colors group-hover:bg-[#0a66c2]/80">
//               <LinkedinIcon className="h-5 w-5 text-white" />
//               <span className="sr-only">Share on LinkedIn</span>
//             </div>
//           </Link>
//           <Link href="#" className="group" prefetch={false}>
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c13584] transition-colors group-hover:bg-[#c13584]/80">
//               <InstagramIcon className="h-5 w-5 text-white" />
//               <span className="sr-only">Share on Instagram</span>
//             </div>
//           </Link>
//           <Link href="#" className="group" prefetch={false}>
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff0000] transition-colors group-hover:bg-[#ff0000]/80">
//               <YoutubeIcon className="h-5 w-5 text-white" />
//               <span className="sr-only">Share on YouTube</span>
//             </div>
//           </Link>
//         </div>
//         {/* <Separator />
//         <div className="flex flex-col items-center gap-2">
//           <Button variant="outline" size="sm" className="w-full">
//             Copy Link
//           </Button>
//           <div className="text-sm text-muted-foreground">
//             Share the link with your friends and followers.
//           </div>
//         </div> */}
//       </CardContent>
//     </Card>
//   );
// }
