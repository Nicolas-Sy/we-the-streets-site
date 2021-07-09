import DeleteButton from "./DeleteButton";

export interface IDefaultInputSection {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onDelete: () => void;
  onSelectObstruction: () => void;
  onUnselectObstruction: () => void;
  editable: boolean;
  selected: boolean;
}

const DefaultInputSection = ({
  value,
  onChange,
  onDelete,
  onSelectObstruction,
  onUnselectObstruction,
  editable,
  selected,
}: IDefaultInputSection) => (
  <>
    {editable ? (
      <div className="rp-default-input-section">
        <select
          name="cars"
          id="cars"
          className="rp-default-input-section_input"
          value={value || "---"}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="---" disabled>
            Select your option
          </option>
          <option value="bench">bench</option>
          <option value="bicycle">bicycle</option>
          <option value="car">car</option>
          <option value="construction_materials">construction_materials</option>
          <option value="curb_ramp">curb_ramp</option>
          <option value="cracked_pavement">cracked_pavement</option>
          <option value="fire_hydrant">fire_hydrant</option>
          <option value="lamp_post">lamp_post</option>
          <option value="motorcycle">motorcycle</option>
          <option value="parking_meter">parking_meter</option>
          <option value="stop_sign">stop_sign</option>
          <option value="street_sign">street_sign</option>
          <option value="street_vendor_stand">street_vendor_stand</option>
          <option value="traffic_light">traffic_light</option>
          <option value="tree">tree</option>
          <option value="tricycle">tricycle</option>
          <option value="utility_post">utility_post</option>
        </select>
        <a
          className="rp-default-input-section_select yes"
          onClick={() => onSelectObstruction()}
        >
          ✓
        </a>
        <a
          className="rp-default-input-section_delete"
          onClick={() => onDelete()}
        >
          <DeleteButton />
        </a>
      </div>
    ) : (
      <div className="rp-default-select-section">
        {selected ? (
          <p>
            You selected
            {value} as an obstruction.
          </p>
        ) : (
          <p>
            Is
            {value} an obstruction?
          </p>
        )}
        <div>
          <a
            className={
              selected
                ? "rp-default-input-section_select yes"
                : "rp-default-input-section_select yes"
            }
            onClick={() => onSelectObstruction()}
          >
            {/* <DeleteButton /> */}
            Yes
          </a>
          <a
            className={
              selected
                ? "rp-default-input-section_select no"
                : "rp-default-input-section_select no"
            }
            onClick={() => onUnselectObstruction()}
          >
            No
          </a>
        </div>
      </div>
    )}
  </>
);

export default DefaultInputSection;
