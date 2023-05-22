import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToyDertails = ({id}) => {

    const [toy, setToy] = useState()
    console.log(toy);

    // const id = useParams();

    // useEffect(() => {
    //     // fetch(`http://localhost:5000/addToy/${id.id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setToy(data);
    //         })
    // }, [])

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">ve been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores repudiandae possimus itaque unde totam eius ut, nostrum, quaerat tempora maiores consectetur odit temporibus earum optio ad doloribus aspernatur cupiditate labore qui hic nulla. Porro, ratione officiis repellendus rem, consectetur magni culpa corrupti vel autem ex sint numquam et beatae. Amet sint minima dolorem quibusdam ipsum beatae voluptatem quam fugiat velit quas. Accusamus numquam inventore aspernatur deleniti ratione reprehenderit sequi quo nulla esse excepturi ab, et eligendi non officia temporibus veniam deserunt eveniet soluta. Ratione numquam perferendis aspernatur debitis error! Dolores vitae maiores delectus autem unde porro iure quasi maxime adipisci doloremque labore reprehenderit, cumque culpa amet quia! Eum molestias iure illo consectetur doloremque inventore ex reprehenderit blanditiis temporibus dicta! Perspiciatis ipsa aliquam aperiam consectetur quisquam suscipit dolorum rerum. Beatae sunt quaerat debitis aliquam et aperiam, soluta earum. Fugiat amet consectetur nihil voluptatibus cum deleniti, quam ullam, et officiis reiciendis quas! Dolorum, dolor modi! Facilis et magni dolores, voluptatum quos molestias eius, architecto dignissimos earum iure ex? Quo rem iste voluptatum ea culpa repellat facilis cum maxime perspiciatis ad excepturi cumque repellendus dolores esse, debitis molestiae facere inventore, aspernatur iure? Molestiae aliquam perferendis nobis sunt ad magnam pariatur? Labore, harum quaerat.</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDertails;