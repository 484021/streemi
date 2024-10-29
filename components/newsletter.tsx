// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import {
//   CheckCircle2,
//   AlertCircle,
//   Star,
//   Gift,
//   Tv,
//   Tag,
//   Users,
// } from "lucide-react";

// export default function AnimeNewsletterSignup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState<{
//     type: "success" | "error";
//     text: string;
//   } | null>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setMessage(null);

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     if (email.includes("@") && name.trim() !== "") {
//       setMessage({
//         type: "success",
//         text: `Thank you, ${name}! You're now subscribed to our exclusive anime newsletter!`,
//       });
//       setName("");
//       setEmail("");
//     } else {
//       setMessage({
//         type: "error",
//         text: "Please enter a valid name and email address.",
//       });
//     }

//     setIsLoading(false);
//   };

//   const benefits = [
//     {
//       icon: <Star className="h-5 w-5" />,
//       text: "Exclusive access to new content",
//     },
//     {
//       icon: <Gift className="h-5 w-5" />,
//       text: "Free wallpapers and digital goodies",
//     },
//     {
//       icon: <Tv className="h-5 w-5" />,
//       text: "Personalized anime recommendations",
//     },
//     {
//       icon: <Tag className="h-5 w-5" />,
//       text: "Exclusive deals and merch drops",
//     },
//     {
//       icon: <Users className="h-5 w-5" />,
//       text: "Invitations to virtual events",
//     },
//   ];

//   return (
//     <Card className="w-full max-w-lg mx-auto">
//       <CardHeader className="text-center">
//         <CardTitle className="text-3xl font-bold mb-2">
//           Join Our Anime Insider Club!
//         </CardTitle>
//         <CardDescription className="text-lg">
//           Get exclusive perks and stay up-to-date with the latest in anime!
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">
//             As a member, you&apos;ll enjoy:
//           </h3>
//           <ul className="space-y-2">
//             {benefits.map((benefit, index) => (
//               <li key={index} className="flex items-center">
//                 <span className="mr-2 text-primary">{benefit.icon}</span>
//                 {benefit.text}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <Input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <Input
//             type="email"
//             placeholder="Your Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <Button
//             type="submit"
//             className="w-full text-lg py-6"
//             disabled={isLoading}
//           >
//             {isLoading ? "Joining..." : "Join the Club!"}
//           </Button>
//         </form>
//       </CardContent>
//       <CardFooter>
//         {message && (
//           <Alert
//             variant={message.type === "success" ? "default" : "destructive"}
//             className="w-full"
//           >
//             {message.type === "success" ? (
//               <CheckCircle2 className="h-4 w-4" />
//             ) : (
//               <AlertCircle className="h-4 w-4" />
//             )}
//             <AlertTitle>
//               {message.type === "success" ? "Welcome aboard!" : "Oops!"}
//             </AlertTitle>
//             <AlertDescription>{message.text}</AlertDescription>
//           </Alert>
//         )}
//       </CardFooter>
//     </Card>
//   );
// }

import React from "react";

export default function SignUpForm() {
  return (
    <div className="w-64">
      <iframe src="https://cdn.forms-content-1.sg-form.com/901fd85a-94dd-11ef-ac1c-0e8c808ecd9f" />
    </div>
  );
}
